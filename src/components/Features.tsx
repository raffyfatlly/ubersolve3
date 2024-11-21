import React from 'react';
import { Bot, Clock, Globe, Brain, HandMetal, MessageSquare, Settings } from 'lucide-react';

const features = [
  {
    icon: <Bot className="text-green-500" size={32} />,
    title: "Smart AI Responses",
    description: "Context-aware, multilingual replies that understand customer intent"
  },
  {
    icon: <Clock className="text-green-500" size={32} />,
    title: "24/7 Availability",
    description: "AI handles routine inquiries while you focus on complex cases"
  },
  {
    icon: <Globe className="text-green-500" size={32} />,
    title: "Multi-Language",
    description: "AI automatically detects and responds in customer's language"
  },
  {
    icon: <Settings className="text-green-500" size={32} />,
    title: "Custom AI Training",
    description: "Train the AI with your business knowledge and communication style"
  },
  {
    icon: <MessageSquare className="text-green-500" size={32} />,
    title: "Live Chat Dashboard",
    description: "Monitor all conversations in real-time with AI assistance insights"
  },
  {
    icon: <HandMetal className="text-green-500" size={32} />,
    title: "Human Takeover",
    description: "Seamlessly intervene in any conversation when personal touch is needed"
  }
];

export default function Features() {
  return (
    <section id="features" className="bg-gray-800/50 py-20 scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">AI-Powered Features with Human Control</h2>
          <p className="text-gray-400 text-lg">
            Perfect blend of artificial intelligence and human expertise. Stay in control while leveraging advanced AI capabilities.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all hover:transform hover:-translate-y-1 group flex flex-col h-full"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}