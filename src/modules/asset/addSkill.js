import Models from '../../infrastructure/database/models';

export default function addSkill({ skill }) {
  const { SkillModel } = Models;
  const doc = new SkillModel(skill);
  return doc.save();
}
