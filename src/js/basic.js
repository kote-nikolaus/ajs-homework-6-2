export default function showAttacks({ special }) {
  const attacksList = [];
  for (let i = 0; i < special.length; i += 1) {
    const attack = {};
    Object.assign(attack, special[i]);
    if (!Object.prototype.hasOwnProperty.call(attack, 'description')) {
      attack.description = 'Описание недоступно';
    }
    attacksList.push(attack);
  }
  return attacksList;
}
