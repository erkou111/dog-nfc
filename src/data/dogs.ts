import { Dog } from '@/types/dog';
import dog1 from '@/assets/dog1.jpg';
import dog2 from '@/assets/dog2.jpg';
import dog3 from '@/assets/dog3.jpg';
import dog4 from '@/assets/dog4.jpg';
import dog5 from '@/assets/dog5.jpg';
import dog6 from '@/assets/dog6.jpg';

export const mockDogs: Dog[] = [
  {
    id: '1',
    name: '金毛 (Golden)',
    breed: '金毛寻回犬',
    age: 2,
    image: dog1,
    nfcId: 'NFC001',
    vaccinations: {
      rabies: { date: '2024-01-15', nextDue: '2025-01-15', status: 'current' },
      dhpp: { date: '2024-02-01', nextDue: '2025-02-01', status: 'current' },
      bordetella: { date: '2024-01-20', nextDue: '2024-07-20', status: 'overdue' }
    },
    healthStatus: 'excellent',
    hasBeenAggressive: false,
    aggressionNotes: '性格温顺，从未咬过人，对陌生人和其他动物都很友好',
    owner: {
      name: '李明',
      phone: '138-1234-5678',
      email: 'liming@email.com',
      address: '北京市朝阳区建国路88号',
      emergencyContact: '王芳 139-8765-4321'
    },
    microchipId: 'MC123456789',
    allergies: ['鸡肉'],
    medications: [],
    vetInfo: {
      clinicName: '阳光宠物医院',
      phone: '010-8888-9999',
      address: '北京市朝阳区三里屯路12号'
    }
  },
  {
    id: '2',
    name: '柯基 (Corgi)',
    breed: '彭布罗克威尔士柯基犬',
    age: 1,
    image: dog2,
    nfcId: 'NFC002',
    vaccinations: {
      rabies: { date: '2024-03-10', nextDue: '2025-03-10', status: 'current' },
      dhpp: { date: '2024-03-15', nextDue: '2025-03-15', status: 'current' },
      bordetella: { date: '2024-03-20', nextDue: '2024-09-20', status: 'current' }
    },
    healthStatus: 'good',
    hasBeenAggressive: false,
    aggressionNotes: '活泼好动，喜欢玩耍，未发生过攻击行为',
    owner: {
      name: '张小花',
      phone: '159-9876-5432',
      email: 'xiaohua@email.com',
      address: '上海市浦东新区陆家嘴环路1000号',
      emergencyContact: '张父 158-1111-2222'
    },
    allergies: [],
    medications: ['关节保健品'],
    vetInfo: {
      clinicName: '爱宠动物医院',
      phone: '021-6666-7777',
      address: '上海市浦东新区世纪大道1号'
    }
  },
  {
    id: '3',
    name: '比格 (Beagle)',
    breed: '比格猎犬',
    age: 3,
    image: dog3,
    nfcId: 'NFC003',
    vaccinations: {
      rabies: { date: '2023-12-01', nextDue: '2024-12-01', status: 'upcoming' },
      dhpp: { date: '2024-01-15', nextDue: '2025-01-15', status: 'current' },
      bordetella: { date: '2024-02-01', nextDue: '2024-08-01', status: 'overdue' }
    },
    healthStatus: 'fair',
    hasBeenAggressive: true,
    aggressionNotes: '2023年8月曾因食物护卫咬伤过一次，已接受行为训练，目前情况良好',
    owner: {
      name: '刘大勇',
      phone: '186-5555-6666',
      email: 'dayong@email.com',
      address: '广州市天河区珠江新城花城大道123号',
      emergencyContact: '刘妻 185-4444-5555'
    },
    microchipId: 'MC987654321',
    allergies: ['牛肉', '谷物'],
    medications: ['过敏药物'],
    vetInfo: {
      clinicName: '南方宠物医院',
      phone: '020-3333-4444',
      address: '广州市天河区体育西路88号'
    }
  },
  {
    id: '4',
    name: '边境牧羊犬 (Border Collie)',
    breed: '边境牧羊犬',
    age: 4,
    image: dog4,
    nfcId: 'NFC004',
    vaccinations: {
      rabies: { date: '2024-02-20', nextDue: '2025-02-20', status: 'current' },
      dhpp: { date: '2024-02-25', nextDue: '2025-02-25', status: 'current' },
      bordetella: { date: '2024-03-01', nextDue: '2024-09-01', status: 'current' }
    },
    healthStatus: 'excellent',
    hasBeenAggressive: false,
    aggressionNotes: '智商极高，训练有素，从未有攻击行为，对儿童特别友善',
    owner: {
      name: '陈教授',
      phone: '137-7777-8888',
      email: 'professor.chen@email.com',
      address: '深圳市南山区科技园南路999号',
      emergencyContact: '陈夫人 136-6666-7777'
    },
    allergies: [],
    medications: ['维生素补充剂'],
    vetInfo: {
      clinicName: '科技园宠物医院',
      phone: '0755-2222-3333',
      address: '深圳市南山区高新区科技南路66号'
    }
  },
  {
    id: '5',
    name: '拉布拉多 (Labrador)',
    breed: '拉布拉多寻回犬',
    age: 5,
    image: dog5,
    nfcId: 'NFC005',
    vaccinations: {
      rabies: { date: '2024-01-10', nextDue: '2025-01-10', status: 'current' },
      dhpp: { date: '2024-01-20', nextDue: '2025-01-20', status: 'current' },
      bordetella: { date: '2024-01-25', nextDue: '2024-07-25', status: 'overdue' }
    },
    healthStatus: 'good',
    hasBeenAggressive: false,
    aggressionNotes: '性格稳重，导盲犬退役，经过专业训练，绝无攻击性',
    owner: {
      name: '王爷爷',
      phone: '152-8888-9999',  
      email: 'wangye@email.com',
      address: '杭州市西湖区文二路188号',
      emergencyContact: '王儿子 151-7777-8888'
    },
    microchipId: 'MC555666777',
    allergies: ['海鲜'],
    medications: ['关节炎药物'],
    vetInfo: {
      clinicName: '西湖宠物医院',
      phone: '0571-1111-2222',
      address: '杭州市西湖区学院路22号'
    }
  },
  {
    id: '6',
    name: '哈士奇 (Husky)',
    breed: '西伯利亚雪橇犬',
    age: 2,
    image: dog6,
    nfcId: 'NFC006',
    vaccinations: {
      rabies: { date: '2024-04-01', nextDue: '2025-04-01', status: 'current' },
      dhpp: { date: '2024-04-05', nextDue: '2025-04-05', status: 'current' },
      bordetella: { date: '2024-04-10', nextDue: '2024-10-10', status: 'current' }
    },
    healthStatus: 'excellent',
    hasBeenAggressive: false,
    aggressionNotes: '活力充沛但温和，喜欢与人互动，从未表现出攻击性',
    owner: {
      name: '小雪',
      phone: '177-3333-4444',
      email: 'xiaoxue@email.com',
      address: '成都市武侯区天府大道1000号',
      emergencyContact: '父亲 176-2222-3333'
    },
    allergies: ['羊肉'],
    medications: [],
    vetInfo: {
      clinicName: '天府宠物医院',
      phone: '028-5555-6666',
      address: '成都市武侯区武侯祠大街111号'
    }
  }
];