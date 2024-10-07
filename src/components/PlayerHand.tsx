import React from 'react'
import Card from './Card'

const PlayerHand: React.FC = () => {
  const cards = [
    { color: 'red', value: '+4' },
    { color: 'blue', value: '0' },
    { color: 'yellow', value: '9' },
    { color: 'green', value: '0' },
    { color: 'red', value: '9' },
    { color: 'blue', value: '+2' },
  ]

  return (
    <div className="flex justify-center items-end space-x-[-60px] mb-4">
      {cards.map((card, index) => (
        <div key={index} className="transform hover:translate-y-[-20px] transition-transform">
          <Card color={card.color} value={card.value} />
        </div>
      ))}
    </div>
  )
}

export default PlayerHand