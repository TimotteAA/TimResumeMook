import { AdapterExperienceType } from './adapter';

// 增加新的一个条目
export function onAddExperience(prevList: AdapterExperienceType[]) {
  let nextList: AdapterExperienceType[] = prevList ? Array.from(prevList) : [];
  const newAddItem: AdapterExperienceType = {
    title: '未命名条目',
    date: new Date().valueOf(),
    post: '',
    content: '',
    parseContent: [],
    beginTime: '',
    endTime: '',
    supplement: '',
  };
  nextList.unshift(newAddItem);
  return nextList;
}

// 删除指定索引的一项
export function onDeleteExperience(deleteIndex: number, prevList: AdapterExperienceType[]) {
  let nextList: AdapterExperienceType[] = prevList ? Array.from(prevList) : [];
  nextList.splice(deleteIndex, 1);
  return nextList;
}
