import useMediaQuery from "@/hooks/useMediaQuery";
import classNames from "classnames";
import React from "react";

type Props = {};

export default function TermsOfUse({}: Props) {
  const [selected, setSelected] = React.useState(0);
  const selectedPage = termsOfUse[selected];
  const { isSm } = useMediaQuery();
  return (
    <div className="flex flex-col sm:flex-row my-28 space-y-6 space-x-0 sm:space-x-6 sm:space-y-0">
      {isSm && (
        <ul className="flex-[3] xl:flex-[1] rounded-xl h-fit border sticky top-28 left-0">
          <li className="font-bold border-b py-2 px-6">Products</li>

          {["Library", "Search", "Market", "Freebies"].map((page, i) => (
            <li
              key={page}
              className={classNames(
                "hover:bg-info hover:text-white rounded-full cursor-pointer py-2 px-6 my-2 mx-4",
                {
                  "bg-info text-white": selected === i,
                }
              )}
              onClick={() => {
                setSelected(i);
              }}
            >
              magicoon {page}
            </li>
          ))}
        </ul>
      )}
      <div className="flex-[4] xl:flex-[3]">
        <p className="text-[#25314C] font-black text-2xl mb-4">TERMS OF USE</p>
        <p className="">Last updated: Nov 3, 2023</p>
        {!isSm && (
          <ul className="border flex-[1] rounded-xl h-fit mt-8">
            <li className="font-bold border-b py-2 px-6">Products</li>

            {["Library", "Search", "Market", "Freebies"].map((page, i) => (
              <li
                key={page}
                className={classNames(
                  "hover:bg-info hover:text-white rounded-full cursor-pointer py-2 px-6 my-2 mx-4",
                  {
                    "bg-info text-white": selected === i,
                  }
                )}
                onClick={() => {
                  setSelected(i);
                }}
              >
                magicoon {page}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-8">
          {selectedPage.content.map((item) => {
            return (
              <div className="mb-20" key={item.title}>
                <p className="mb-6 text-[#25314C] font-bold text-lg">
                  {item.title}
                </p>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

interface ITermOfUse {
  page: string;
  content: {
    title: string;
    description: string;
  }[];
}
const termsOfUse: ITermOfUse[] = [
  {
    page: "Library",
    content: [
      {
        title: "Licences",
        description:
          "In all licenses, you will have the right to use icons in all personal and commercial projects. You can use it in all projects, including the user interface, software, prints, and other graphic tools and techniques. Sending free icons to other people is unrestricted. Sending premium icons to other people is a violation of the terms.",
      },
      {
        title: "Contract Work",
        description:
          "If you are working on a project for your client, you do not have the right to send more than 300 icons to them. For example, you can only share the Figma file where you used the Iconly icons in that project with your client, and sending your username and password to the client violates the terms.",
      },

      {
        title: "Team Plan",
        description:
          "Everyone who has access to the team account can use all the features in accordance with the terms above.",
      },
      {
        title: "Icons",
        description:
          "All rights are reserved for the Iconly Pro and personalizing the icons and sharing them with your own name is a violation of the rules.",
      },
      {
        title: "Disclaimer",
        description:
          "All our products are provided “as is” without any warranty. The Iconly Pro is not responsible for any damages resulting from any defects in direct or indirect matters on the part of the designer and user.",
      },
      {
        title: "Refund Policy",
        description:
          "We offer refund within the first 7 days of your purchase, if 7 days have passed since your purchase, you will not be offered a refund of any kind.",
      },
      {
        title: "Utilization",
        description:
          "Using a brand name or collecting icons without permission is against the law. This includes trade secrets and confidential information. It can harm the original brand owner’s reputation and financial interests, and mislead customers. Protecting intellectual property rights is crucial to ensure a fair and competitive business environment. It’s important to avoid using others’ trademarks or information without proper authorization or licensing. Failure to do so can result in severe legal consequences, including fines and damages. Respect the laws and regulations that govern intellectual property.",
      },
    ],
  },
  {
    page: "Library",
    content: [
      {
        title: "MIT",
        description:
          "In all licenses, you will have the right to use icons in all personal and commercial projects. You can use it in all projects, including the user interface, software, prints, and other graphic tools and techniques. Sending free icons to other people is unrestricted. Sending premium icons to other people is a violation of the terms.",
      },
      {
        title: "Contract Work",
        description:
          "If you are working on a project for your client, you do not have the right to send more than 300 icons to them. For example, you can only share the Figma file where you used the Iconly icons in that project with your client, and sending your username and password to the client violates the terms.",
      },

      {
        title: "Team Plan",
        description:
          "Everyone who has access to the team account can use all the features in accordance with the terms above.",
      },
      {
        title: "Icons",
        description:
          "All rights are reserved for the Iconly Pro and personalizing the icons and sharing them with your own name is a violation of the rules.",
      },
      {
        title: "Disclaimer",
        description:
          "All our products are provided “as is” without any warranty. The Iconly Pro is not responsible for any damages resulting from any defects in direct or indirect matters on the part of the designer and user.",
      },
      {
        title: "Refund Policy",
        description:
          "We offer refund within the first 7 days of your purchase, if 7 days have passed since your purchase, you will not be offered a refund of any kind.",
      },
      {
        title: "Utilization",
        description:
          "Using a brand name or collecting icons without permission is against the law. This includes trade secrets and confidential information. It can harm the original brand owner’s reputation and financial interests, and mislead customers. Protecting intellectual property rights is crucial to ensure a fair and competitive business environment. It’s important to avoid using others’ trademarks or information without proper authorization or licensing. Failure to do so can result in severe legal consequences, including fines and damages. Respect the laws and regulations that govern intellectual property.",
      },
    ],
  },
  {
    page: "Search",
    content: [
      {
        title: "Beroual",
        description:
          "In all licenses, you will have the right to use icons in all personal and commercial projects. You can use it in all projects, including the user interface, software, prints, and other graphic tools and techniques. Sending free icons to other people is unrestricted. Sending premium icons to other people is a violation of the terms.",
      },
      {
        title: "Contract Work",
        description:
          "If you are working on a project for your client, you do not have the right to send more than 300 icons to them. For example, you can only share the Figma file where you used the Iconly icons in that project with your client, and sending your username and password to the client violates the terms.",
      },

      {
        title: "Team Plan",
        description:
          "Everyone who has access to the team account can use all the features in accordance with the terms above.",
      },
      {
        title: "Icons",
        description:
          "All rights are reserved for the Iconly Pro and personalizing the icons and sharing them with your own name is a violation of the rules.",
      },
      {
        title: "Disclaimer",
        description:
          "All our products are provided “as is” without any warranty. The Iconly Pro is not responsible for any damages resulting from any defects in direct or indirect matters on the part of the designer and user.",
      },
      {
        title: "Refund Policy",
        description:
          "We offer refund within the first 7 days of your purchase, if 7 days have passed since your purchase, you will not be offered a refund of any kind.",
      },
      {
        title: "Utilization",
        description:
          "Using a brand name or collecting icons without permission is against the law. This includes trade secrets and confidential information. It can harm the original brand owner’s reputation and financial interests, and mislead customers. Protecting intellectual property rights is crucial to ensure a fair and competitive business environment. It’s important to avoid using others’ trademarks or information without proper authorization or licensing. Failure to do so can result in severe legal consequences, including fines and damages. Respect the laws and regulations that govern intellectual property.",
      },
    ],
  },
  {
    page: "Market",
    content: [
      {
        title: "Ramzy",
        description:
          "In all licenses, you will have the right to use icons in all personal and commercial projects. You can use it in all projects, including the user interface, software, prints, and other graphic tools and techniques. Sending free icons to other people is unrestricted. Sending premium icons to other people is a violation of the terms.",
      },
      {
        title: "Contract Work",
        description:
          "If you are working on a project for your client, you do not have the right to send more than 300 icons to them. For example, you can only share the Figma file where you used the Iconly icons in that project with your client, and sending your username and password to the client violates the terms.",
      },

      {
        title: "Team Plan",
        description:
          "Everyone who has access to the team account can use all the features in accordance with the terms above.",
      },
      {
        title: "Icons",
        description:
          "All rights are reserved for the Iconly Pro and personalizing the icons and sharing them with your own name is a violation of the rules.",
      },
      {
        title: "Disclaimer",
        description:
          "All our products are provided “as is” without any warranty. The Iconly Pro is not responsible for any damages resulting from any defects in direct or indirect matters on the part of the designer and user.",
      },
      {
        title: "Refund Policy",
        description:
          "We offer refund within the first 7 days of your purchase, if 7 days have passed since your purchase, you will not be offered a refund of any kind.",
      },
      {
        title: "Utilization",
        description:
          "Using a brand name or collecting icons without permission is against the law. This includes trade secrets and confidential information. It can harm the original brand owner’s reputation and financial interests, and mislead customers. Protecting intellectual property rights is crucial to ensure a fair and competitive business environment. It’s important to avoid using others’ trademarks or information without proper authorization or licensing. Failure to do so can result in severe legal consequences, including fines and damages. Respect the laws and regulations that govern intellectual property.",
      },
    ],
  },
];
