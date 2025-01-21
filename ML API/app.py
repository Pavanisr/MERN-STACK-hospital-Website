from flask import Flask, request, jsonify
import pickle
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Function to load the model and predict
def prediction(features):
    filenm = 'model/predictor.pickle'
    with open(filenm, 'rb') as file:
        model = pickle.load(file)
    pred_value = model.predict([features])
    return pred_value[0]  # Return the prediction value directly

@app.route('/about', methods=['GET'])
def about():
    return jsonify({"message": "This is the about route of the app."})

@app.route('/', methods=['POST'])
def index():
    if request.is_json:  # Check if the request data is JSON
        data = request.get_json()

        # Extract features from JSON payload
        try:
            features = [
                data['itching'],
                data['skin_rash'],
                data['nodal_skin_eruptions'],
                data['dischromic_patches'],
                data['continuous_sneezing'],
                data['shivering'],
                data['chills'],
                data['watering_from_eyes'],
                data['stomach_pain'],
                data['acidity'],
                data['ulcers_on_tongue'],
                data['vomiting'],
                data['cough'],
                data['chest_pain'],
                data['yellowish_skin'],
                data['nausea'],
                data['loss_of_appetite'],
                data['abdominal_pain'],
                data['yellowing_of_eyes'],
                data['burning_micturition'],
                data['spotting_urination'],
                data['passage_of_gases'],
                data['internal_itching'],
                data['indigestion'],
                data['muscle_wasting'],
                data['patches_in_throat'],
                data['high_fever'],
                data['extra_marital_contacts'],
                data['fatigue'],
                data['weight_loss'],
                data['restlessness'],
                data['lethargy'],
                data['irregular_sugar_level'],
                data['blurred_and_distorted_vision'],
                data['obesity'],
                data['excessive_hunger'],
                data['increased_appetite'],
                data['polyuria'],
                data['sunken_eyes'],
                data['dehydration'],
                data['diarrhoea'],
                data['breathlessness'],
                data['family_history'],
                data['mucoid_sputum'],
                data['headache'],
                data['dizziness'],
                data['loss_of_balance'],
                data['lack_of_concentration'],
                data['stiff_neck'],
                data['depression'],
                data['irritability'],
                data['visual_disturbances'],
                data['back_pain'],
                data['weakness_in_limbs'],
                data['neck_pain'],
                data['weakness_of_one_body_side'],
                data['altered_sensorium'],
                data['dark_urine'],
                data['sweating'],
                data['muscle_pain'],
                data['mild_fever'],
                data['swelled_lymph_nodes'],
                data['malaise'],
                data['red_spots_over_body'],
                data['joint_pain'],
                data['pain_behind_the_eyes'],
                data['constipation'],
                data['toxic_look'],
                data['belly_pain'],
                data['yellow_urine'],
                data['receiving_blood_transfusion'],
                data['receiving_unsterile_injections'],
                data['coma'],
                data['stomach_bleeding'],
                data['acute_liver_failure'],
                data['swelling_of_stomach'],
                data['distention_of_abdomen'],
                data['history_of_alcohol_consumption'],
                data['fluid_overload'],
                data['phlegm'],
                data['blood_in_sputum'],
                data['throat_irritation'],
                data['redness_of_eyes'],
                data['sinus_pressure'],
                data['runny_nose'],
                data['congestion'],
                data['loss_of_smell'],
                data['fast_heart_rate'],
                data['rusty_sputum'],
                data['pain_during_bowel_movements'],
                data['pain_in_anal_region'],
                data['bloody_stool'],
                data['irritation_in_anus'],
                data['cramps'],
                data['bruising'],
                data['swollen_legs'],
                data['swollen_blood_vessels'],
                data['prominent_veins_on_calf'],
                data['weight_gain'],
                data['cold_hands_and_feets'],
                data['mood_swings'],
                data['puffy_face_and_eyes'],
                data['enlarged_thyroid'],
                data['brittle_nails'],
                data['swollen_extremeties'],
                data['abnormal_menstruation'],
                data['muscle_weakness'],
                data['anxiety'],
                data['slurred_speech'],
                data['palpitations'],
                data['drying_and_tingling_lips'],
                data['knee_pain'],
                data['hip_joint_pain'],
                data['swelling_joints'],
                data['painful_walking'],
                data['movement_stiffness'],
                data['spinning_movements'],
                data['unsteadiness'],
                data['pus_filled_pimples'],
                data['blackheads'],
                data['scurring'],
                data['bladder_discomfort'],
                data['foul_smell_of_urine'],
                data['continuous_feel_of_urine'],
                data['skin_peeling'],
                data['silver_like_dusting'],
                data['small_dents_in_nails'],
                data['inflammatory_nails'],
                data['blister'],
                data['red_sore_around_nose'],
                data['yellow_crust_ooze']
            ]
        except KeyError as e:
            return jsonify({"error": f"Missing field: {str(e)}"}), 400

        # Predict
        pred = prediction(features)

        # Map prediction to response
        response = {
            0: "Dermatologist",
            1: "Allergist",
            2: "Gastroenterologist",
            3: "Hepatologist",
            4: "Osteopathic",
            5: "Endocrinologist",
            6: "Pulmonologist",
            7: "Cardiologist",
            8: "Neurologist",
            9: "Internal Medicine",
            10: "Pediatrician",
            11: "General Medicine ",
            12: "Phlebologist",
            13: "Osteoarthristis",
            14: "Rheumatologists",
            15: "Otolaryngologist",
            16: "Dermatologists",
            17: "Gynecologist"
        }.get(pred, "unknown")

        return jsonify({"prediction": response})
    else:
        return jsonify({"error": "Request must be in JSON format"}), 400

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5000)
