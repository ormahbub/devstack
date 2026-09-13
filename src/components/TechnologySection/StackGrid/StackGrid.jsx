import React from 'react';
import StackCard from './StackCard';

function StackGrid({ data, stack, addToStack }) {
  return (
    <div className="grid grid-cols-3 gap-6">
      {data.map((tech) => (
        <StackCard 
          key={tech.id} 
          tech={tech} 
          isSelected={stack.some(item => item.id === tech.id)}
          onAdd={() => addToStack(tech)}
        />
      ))}
    </div>
  );
}

export default StackGrid;