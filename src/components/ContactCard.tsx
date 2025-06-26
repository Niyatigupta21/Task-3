
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Contact } from "@/types/Contact";
import { Mail, Phone, Building, PhoneCall, Video, MessageSquare } from "lucide-react";

interface ContactCardProps {
  contact: Contact;
}

const ContactCard = ({ contact }: ContactCardProps) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const handleCall = () => {
    window.open(`tel:${contact.phone}`, '_self');
  };

  const handleVideoCall = () => {
    // This could be integrated with video calling services
    console.log(`Initiating video call to ${contact.name}`);
  };

  const handleMessage = () => {
    window.open(`sms:${contact.phone}`, '_self');
  };

  return (
    <TooltipProvider>
      <Card className="w-full max-w-sm hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
        <CardHeader className="text-center pb-4">
          <div className="relative w-20 h-20 mx-auto mb-3">
            <div 
              className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 opacity-80"
              style={{
                backgroundImage: `url(/lovable-uploads/51cc09cc-2e9b-45de-ae59-8c2593b58284.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay'
              }}
            />
            <Avatar className="w-20 h-20 relative z-10 border-2 border-white shadow-lg">
              <AvatarImage src={contact.avatar} alt={contact.name} />
              <AvatarFallback className="text-lg font-semibold bg-white/90 text-gray-700">
                {getInitials(contact.name)}
              </AvatarFallback>
            </Avatar>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">{contact.name}</h3>
          {contact.company && (
            <p className="text-sm text-gray-600">{contact.company}</p>
          )}
          
          {/* Action buttons */}
          <div className="flex justify-center gap-2 mt-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={handleCall}
                  className="h-8 w-8 bg-white/70 hover:bg-white border-blue-300 hover:border-blue-400"
                >
                  <PhoneCall className="h-4 w-4 text-blue-600" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Call {contact.name}</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={handleVideoCall}
                  className="h-8 w-8 bg-white/70 hover:bg-white border-purple-300 hover:border-purple-400"
                >
                  <Video className="h-4 w-4 text-purple-600" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Video call {contact.name}</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={handleMessage}
                  className="h-8 w-8 bg-white/70 hover:bg-white border-pink-300 hover:border-pink-400"
                >
                  <MessageSquare className="h-4 w-4 text-pink-600" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Message {contact.name}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 bg-white/50 rounded-b-lg">
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-gray-700">{contact.email}</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-green-600" />
            <span className="text-sm text-gray-700">{contact.phone}</span>
          </div>
          {contact.company && (
            <div className="flex items-center gap-3">
              <Building className="w-4 h-4 text-purple-600" />
              <span className="text-sm text-gray-700">{contact.company}</span>
            </div>
          )}
        </CardContent>
      </Card>
    </TooltipProvider>
  );
};

export default ContactCard;
