import Message from "./Message";


const Messages = () => {
    const allMessages = [
        {
            message: "Lorem ipsum dolor sit amet.",
            sender: "abc@gmail.com",
        },
        {
            message: "Lorem ipsum dolor sit amet.",
            sender: "alamin102410@gmail.com",
        },
        {
            message: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
            sender: "abc@gmail.com",
        },
        {
            message: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
            sender: "alamin102410@gmail.com",
        },
        {
            message: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
            sender: "alamin102410@gmail.com",
        },
        {
            message: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
            sender: "abc@gmail.com",
        },
        {
            message: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
            sender: "abc@gmail.com",
        },
    ]
    return (
        <div className="flex flex-col justify-end gap-y-4 h-full px-6">
            {
                allMessages?.map((message, index) => <Message
                    key={index}
                    message={message}
                ></Message>)
            }
        </div>
    );
};

export default Messages;