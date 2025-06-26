import { useState } from "react";
import { Contact } from "@/types/Contact";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import { Button } from "@/components/ui/button";
import { Plus, Users } from "lucide-react";

const ContactList = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: "1",
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      phone: "+1 (555) 123-4567",
      company: "Tech Solutions Inc",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      createdAt: new Date()
    },
    {
      id: "2",
      name: "Michael Chen",
      email: "m.chen@company.com",
      phone: "+1 (555) 987-6543",
      company: "Digital Innovations",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      createdAt: new Date()
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      email: "emily.r@startup.co",
      phone: "+1 (555) 456-7890",
      company: "Creative Studio",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      createdAt: new Date()
    }
  ]);
  
  const [showForm, setShowForm] = useState(false);

  const handleAddContact = (newContact: Contact) => {
    setContacts(prev => [...prev, newContact]);
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Users className="w-6 h-6" />
          <h1 className="text-3xl font-bold">My Contacts</h1>
          <span className="text-sm text-muted-foreground">
            ({contacts.length} contacts)
          </span>
        </div>
        <Button 
          onClick={() => setShowForm(!showForm)}
          className="gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Contact
        </Button>
      </div>

      {showForm && (
        <div className="flex justify-center">
          <ContactForm onAddContact={handleAddContact} />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {contacts.map(contact => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>

      {contacts.length === 0 && (
        <div className="text-center py-12">
          <Users className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">No contacts yet</h3>
          <p className="text-muted-foreground mb-4">
            Get started by adding your first contact!
          </p>
          <Button onClick={() => setShowForm(true)} className="gap-2">
            <Plus className="w-4 h-4" />
            Add Your First Contact
          </Button>
        </div>
      )}
    </div>
  );
};

export default ContactList;
