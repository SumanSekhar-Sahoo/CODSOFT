import re
import os

# Define color box wrappers
def box_message(message, sender="bot"):
    if sender == "bot":
        # Blue background with white text
        return f"\033[1;37;44m  ChatBot: {message}  \033[0m"
    else:
        # Green background with black text
        return f"\033[1;30;42m  You: {message}  \033[0m"

def get_user_response(msg_from_user):
    msg_from_user = msg_from_user.lower().strip()

    if re.search(r'\b(hi|hello|hey)\b', msg_from_user):
        return "👋 Hello there! I'm ChatBot. How can I help you today?"

    elif re.search(r'\bhow are you\b', msg_from_user):
        return "😊 I'm doing great, thank you! I hope you're having a good day too."

    elif re.search(r'\b(your name|who are you)\b', msg_from_user):
        return "🤖 I'm ChatBot — your friendly chatbot for this Codesoft internship!"

    elif re.search(r'\b(help|options)\b', msg_from_user):
        return "📌 You can ask me anything like 'who are you', 'how are you', or just say 'hi'!"

    elif re.search(r'\b(creator|made you|built you)\b', msg_from_user):
        return "🛠️ I was proudly built by Suman for a Codesoft internship task."

    elif msg_from_user in ['1', 'help']:
        return "💡 Option 1: I can chat with you\n💡 Option 2: Ask who I am\n💡 Option 3: Say bye to exit"

    elif msg_from_user in ['2', 'about']:
        return "🧠 I'm a rule-based chatbot that understands basic patterns and replies accordingly."

    elif msg_from_user in ['bye', 'exit', 'quit']:
        return "👋 Goodbye! Chat with you later!"

    else:
        return "😕 Sorry, I didn't quite get that. Try saying 'help' to see what I can do."

def Chat_Bot():
    os.system('cls' if os.name == 'nt' else 'clear')
    print("\033[1;34;47m💬 Welcome to the Colorful Chatbox – ChatBot!\033[0m")
    print("Type 'bye' anytime to exit.\n")

    message_counter = 0
    while True:
        msg_from_user = input("You: ")
        message_counter += 1

        # Show user message in styled box
        print(box_message(msg_from_user, sender="user"))

        bot_reply = get_user_response(msg_from_user)
        print(box_message(bot_reply, sender="bot"))

        if msg_from_user.lower().strip() in ['bye', 'exit', 'quit']:
            break

if __name__ == "__main__":
    Chat_Bot()
