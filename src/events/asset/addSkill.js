export default async function addSkill(data) {
  return {
    action: 'ADD_Skill',
    payload: {
      skill: data,
    },
  };
}
