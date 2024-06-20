import { HiOutlineDotsVertical } from "react-icons/hi";
import CommonHeader from "./CommonHeader";

const ContractList = ({ contact }) => {
  return (
    <div className="space-y-10">
      <h1 className="font-bold text-blue-600">{contact.group}</h1>
      <div className="space-y-8">
        {contact.groupContacts.map((groupContact, idx) => (
          <div key={idx} className="flex justify-between">
            <p>{groupContact.name}</p>
            <HiOutlineDotsVertical className="cursor-pointer"/>
          </div>
        ))}
      </div>
    </div>
  );
};

const Contact = () => {
  const contacts = [
    {
      group: "A",
      groupContacts: [
        {
          id: "01",
          name: "Annie Merrie",
        },
        {
          id: "02",
          name: "Anum Kerry",
        },
      ],
    },
    {
      group: "B",
      groupContacts: [
        {
          id: "01",
          name: "Annie Merrie",
        },
        {
          id: "02",
          name: "Anum Kerry",
        },
      ],
    },
  ];

  return (
    <div>
      <CommonHeader title={"Contacts"} icon={true} search={true} />

      <div className="px-8 py-10 space-y-12">
        {contacts.map((contact, idx) => (
          <ContractList key={idx} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default Contact;
