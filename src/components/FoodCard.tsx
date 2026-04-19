import { motion } from 'motion/react';

interface FoodCardProps {
  name: string;
  price: string;
  description: string;
  image: string;
  delay?: number;
}

export default function FoodCard({ name, price, description, image, delay = 0 }: FoodCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="bg-cream rounded-[32px] overflow-hidden shadow-sm group hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full font-serif font-bold italic text-coffee text-sm">
          {price}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-serif font-bold text-xl mb-1 text-espresso">{name}</h3>
        <p className="text-espresso/60 text-xs leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
