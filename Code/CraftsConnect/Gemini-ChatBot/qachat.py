from dotenv import load_dotenv
load_dotenv() ## loading all the environment variables

import streamlit as st
import os
import google.generativeai as genai

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

## function to load Gemini Pro model and get repsonses
model=genai.GenerativeModel("gemini-pro") 
chat = model.start_chat(history=[])
def get_gemini_response(question):
    
    response=chat.send_message(question,stream=True)
    return response

st.set_page_config(page_title="Crafts-Connect")

st.header("Crafts-Connect ChatBot")

# Initialize session state for chat history if it doesn't exist
if 'chat_history' not in st.session_state:
    st.session_state['chat_history'] = []

input=st.text_input("Post your quries ",key="input")
submit=st.button("Submit")

if submit and input:
    response=get_gemini_response(input)
    # Add user query and response to session state chat history
    st.session_state['chat_history'].append(("You", input))
    st.subheader("Response :")
    for chunk in response:
        st.write(chunk.text)
        st.session_state['chat_history'].append(("Artisan Bot", chunk.text))
st.subheader("The Chat History : ")
    
for role, text in st.session_state['chat_history']:
    st.write(f"{role}: {text}")
    



    

