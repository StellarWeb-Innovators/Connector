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
        {
            message: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
            sender: "alamin102410@gmail.com",
        },
    ]
    return (
        <div className="flex flex-col justify-end gap-y-4  py-1">
            <div className="lg:h-[75vh] h-[78vh] space-y-4 overflow-hidden overflow-y-auto no-scrollbar lg:px-6 px-3 pt-6 pb-4 lg:pb-0">
                {
                    allMessages?.map((message, index) => <Message
                        key={index}
                        message={message}
                    ></Message>)
                }
            </div>
        </div>
    );
};

export default Messages;