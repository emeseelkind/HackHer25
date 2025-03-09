import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.neural_network import MLPRegressor
import joblib

def load_data(file_path):
    df = pd.read_csv(file_path)
    return df

def preprocess_data(df):
    nutrient_columns = df.columns[3:]
    df = df.dropna(subset=nutrient_columns).copy()  # Ensure modification on a copy
    
    label_encoder = LabelEncoder()
    df.loc[:, 'Food_ID'] = label_encoder.fit_transform(df['Shrt_Desc'])
    
    X = df[['Food_ID']]
    Y = df[nutrient_columns].apply(pd.to_numeric, errors='coerce').fillna(0)  # Ensure numeric values
    
    X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=42)
    
    scaler = StandardScaler()
    Y_train_scaled = scaler.fit_transform(Y_train)
    Y_test_scaled = scaler.transform(Y_test)
    
    return X_train, X_test, Y_train_scaled, Y_test_scaled, scaler, label_encoder, nutrient_columns

def build_model():
    return MLPRegressor(hidden_layer_sizes=(64, 32), max_iter=500, random_state=42)

def train_model(model, X_train, Y_train):
    model.fit(X_train, Y_train)
    return model

def test_model(model, X_test, scaler):
    Y_pred_scaled = model.predict(X_test)
    Y_pred = scaler.inverse_transform(Y_pred_scaled)
    return Y_pred

def load_food_intake(file_name="food_intake.txt"):
    # Load food items from a text file
    with open(file_name, "r") as file:
        food_items = [line.strip() for line in file.readlines()]
    return food_items

def main():
    file_path = "ABBREV.csv"
    df = load_data(file_path)
    X_train, X_test, Y_train, Y_test, scaler, label_encoder, nutrient_columns = preprocess_data(df)
    
    model = build_model()
    model = train_model(model, X_train, Y_train)
    
    joblib.dump(model, "nutrition_model.pkl")
    joblib.dump(scaler, "scaler.pkl")
    joblib.dump(label_encoder, "label_encoder.pkl")
    
    print("\nModel training complete and saved!\n")
    
    food_intake = load_food_intake("food_intake.txt")
    # Iterate through each food item and make predictions
    for food_example in food_intake:
        try:
            food_id = label_encoder.transform([food_example])[0]
            nutrition_scaled = model.predict([[food_id]])
            nutrition = scaler.inverse_transform(nutrition_scaled.reshape(1, -1))  # Ensure correct shape
            nutrition_facts = dict(zip(nutrient_columns, nutrition[0]))
            
            print(f"\nNutrition facts for {food_example}:\n")
            for nutrient, value in nutrition_facts.items():
                print(f"{nutrient}: {value:.2f} g")
        except ValueError:
            print(f"\nFood item '{food_example}' not found in the database.")
        
    print("\nDONE! \n")

if __name__ == "__main__":
    main()
