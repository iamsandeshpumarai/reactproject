import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-7 ">
      <div>
        <h3 className="text-xl font-bold text-shoe-dark mb-4">Visit Our Store</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <MapPin className="text-shoe-primary mr-3 h-5 w-5 flex-shrink-0 mt-0.5" />
            <span>
              <p className="font-medium">Shoe Store Flagship</p>
              <p className="text-gray-600">123 Shoe Avenue</p>
              <p className="text-gray-600">Footwear City, FC 12345</p>
            </span>
          </div>
          
          <div className="flex items-center">
            <Phone className="text-shoe-primary mr-3 h-5 w-5 flex-shrink-0" />
            <span className="text-gray-600">(123) 456-7890</span>
          </div>
          
          <div className="flex items-center">
            <Mail className="text-shoe-primary mr-3 h-5 w-5 flex-shrink-0" />
            <a href="mailto:info@shoestore.com" className="text-shoe-primary hover:underline">
              info@SoleVague.com
            </a>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-shoe-dark mb-4">Store Hours</h3>
        <div className="flex items-start">
          <Clock className="text-shoe-primary mr-3 h-5 w-5 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="grid grid-cols-2 gap-2">
              <p className="text-gray-600">Monday - Friday:</p>
              <p>10:00 AM - 8:00 PM</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <p className="text-gray-600">Saturday:</p>
              <p>10:00 AM - 6:00 PM</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <p className="text-gray-600">Sunday:</p>
              <p>12:00 PM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-shoe-dark mb-4">Customer Service</h3>
        <p className="text-gray-600 mb-4">
          Have questions or need assistance with your order? Our customer service team is ready to help!
        </p>
        <p className="text-gray-600 mb-2">
          Call us at <span className="font-medium">(123) 456-7890</span> or email us at{" "}
          <a href="mailto:support@shoestore.com" className="text-shoe-primary hover:underline">
            support@SoleVague.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;