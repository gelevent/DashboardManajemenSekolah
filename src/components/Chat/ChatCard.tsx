import Link from "next/link";
import Image from "next/image";
import { Chat } from "@/types/chat";

const chatData: Chat[] = [
  {
    avatar: "/images/user/user-01.png",
    name: "Gemi Widdo",
    time: "05:40 AM",
  },
  {
    avatar: "/images/user/user-02.png",
    name: "Henry Fisher",
    time: "05:47 AM",
  },
  {
    avatar: "/images/user/user-04.png",
    name: "Wilium Smith",
    time: "05:52 AM",
  },
  {
    seen: true,
    avatar: "/images/user/user-05.png",
    name: "Henry Deco",
    time: "05:55 AM",
  },
  {
    avatar: "/images/user/user-06.png",
    name: "Jubin Jack",
    time: "6:00 Am",
  },
];

const ChatCard = () => {
  return (
    <div className="col-span-12 rounded-[10px] bg-white py-6 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-4">
      <h4 className="mb-5.5 px-7.5 text-body-2xlg font-bold text-dark dark:text-white">
        The First
      </h4>

      <div>
        {chatData.map((chat, key) => (
          <Link
            href="/"
            className="flex items-center gap-4.5 px-7.5 py-3 hover:bg-gray-1 dark:hover:bg-dark-2"
            key={key}
          >
            <div className="relative h-14 w-14 rounded-full">
              <Image
                width={56}
                height={56}
                src={chat.avatar}
                alt="User"
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />
            </div>

            <div className="flex flex-1 items-center justify-between">
              <div>
                <h5 className="font-medium text-dark dark:text-white">
                  {chat.name}
                </h5>
                <p>
                  <span className="text-xs"> {chat.time}</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChatCard;
