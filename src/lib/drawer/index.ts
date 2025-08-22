import { SvgProps } from 'react-native-svg';

import { Drawers } from '@/navigation/routes';
import { RootDrawerParamList } from '@/navigation/types';
import { TxKeyPath } from '@/translations/utils';

import {
  CalenderIcon,
  CooperationIcon,
  CopyIcon,
  DegreeHatIcon,
  EditIcon,
  GlobalUserIcon,
  HeadphoneIcon,
  HosseinIcon,
  MeditationIcon,
  MessageLockIcon,
  MusicIcon,
  SmileHeartIcon,
  UserHeadphoneIcon,
} from '@/components/icons';

export type MenuItem = {
  disabled: boolean;
  icon: React.ComponentType<SvgProps>;
  id: number;
  label: TxKeyPath;
  screen: keyof RootDrawerParamList;
  show: boolean;
};
export type MenuSection = {
  children: MenuItem[];
  id: number;
  label: '' | TxKeyPath;
};
export const menus: MenuSection[] = [
  {
    children: [
      {
        disabled: false,
        icon: DegreeHatIcon,
        id: 11,
        label: 'learning_courses',
        screen: Drawers.Courses,
        show: true,
      },
      {
        disabled: false,
        icon: MusicIcon,
        id: 12,
        label: 'albums',
        screen: Drawers.Albums,
        show: true,
      },
      {
        disabled: false,
        icon: GlobalUserIcon,
        id: 13,
        label: 'live_meeting',
        screen: Drawers.LiveMeeting,
        show: true,
      },
    ],
    id: 1,
    label: 'services',
  },
  {
    children: [
      {
        disabled: false,
        icon: UserHeadphoneIcon,
        id: 21,
        label: 'podcast',
        screen: Drawers.Podcast,
        show: true,
      },
      {
        disabled: false,
        icon: MeditationIcon,
        id: 32,
        label: 'meditation',
        screen: Drawers.Meditation,
        show: true,
      },
      {
        disabled: false,
        icon: CopyIcon,
        id: 23,
        label: 'reading',
        screen: Drawers.Reading,
        show: true,
      },
      {
        disabled: false,
        icon: HeadphoneIcon,
        id: 24,
        label: 'listening',
        screen: Drawers.Listening,
        show: true,
      },
      {
        disabled: false,
        icon: EditIcon,
        id: 25,
        label: 'writing',
        screen: Drawers.Writing,
        show: true,
      },
    ],
    id: 2,
    label: 'experience',
  },
  {
    children: [
      {
        disabled: false,
        icon: MessageLockIcon,
        id: 31,
        label: 'private_consultation',
        screen: Drawers.PrivateConsultation,
        show: true,
      },
    ],
    id: 3,
    label: '',
  },
  {
    children: [
      {
        disabled: false,
        icon: CalenderIcon,
        id: 41,
        label: 'events',
        screen: Drawers.Events,
        show: true,
      },
      {
        disabled: false,
        icon: SmileHeartIcon,
        id: 42,
        label: 'donation',
        screen: Drawers.Donation,
        show: true,
      },
      {
        disabled: false,
        icon: HosseinIcon,
        id: 43,
        label: 'about_us',
        screen: Drawers.AboutUs,
        show: true,
      },
      {
        disabled: false,
        icon: CooperationIcon,
        id: 44,
        label: 'collaboration',
        screen: Drawers.Collaboration,
        show: true,
      },
    ],
    id: 4,
    label: '',
  },
];
