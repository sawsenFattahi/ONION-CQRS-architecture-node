import assetRepository from '../../repositories/assetRepository';
import { AssetEvent } from '../../events';

export default async function addUser(data) {
  const { userName } = data;
  const { save } = await assetRepository.addSkill(userName);
  const {
    newSkill,
    error,
  } = await save(await AssetEvent.addSkill(data));
  return {
    newSkill,
    error,
  };
}
