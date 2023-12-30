type CoordinatesType = {
  type: string;
  coordinates: [number, number];
};

type LocationType = {
  type: string;
  coordinates: [number, number];
};

type PersonalType = {
  desiredRelationship: any[]; // Replace with the correct type if needed
};

type IdealPartnerType = {
  ethnicity: any[]; // Replace with the correct type if needed
  maritalStatus: any[]; // Replace with the correct type if needed
  desiredRelationship: any[]; // Replace with the correct type if needed
  willingToRelocate: any[]; // Replace with the correct type if needed
};

type User = {
  location: LocationType;
  personal: PersonalType;
  myIdealPartner: IdealPartnerType;
  _id: string;
  firstName: string;
  lastName: string;
  photo: string;
  email: string;
  active: boolean;
  role: string;
  accountType: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type UserData = {
  status: string;
  message: string;
  state: string;
  token: string;
  user: User;
};

export type ConversationMemberType = {
  _id: string;
  firstName: string;
  lastName: string;
  photo: string;
  lastSeen: string;
};

export type ConversationsItemType = {
  _id: string;
  members: ConversationMemberType[];
  unread: boolean;
  createdAt: Date; // Assuming createdAt is a date string
  updatedAt: Date; // Assuming updatedAt is a date string
  __v: number;
};

export type ConversationsType = {
  status: string;
  results: number;
  pages: number;
  data: ConversationsItemType[] | [];
};

export type ChatMessageItemType = {
  _id: string;
  conversation: string;
  sender: string;
  text: string;

  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type ChatMessagesType = {
  status: string;
  results: number;
  pages: number;
  data: ChatMessageItemType[];
};

///////////////////////////





type SinupUserInfo = {
  firstName: string;
  lastName: string;
  photo: string;
  email: string;
  active: boolean;
  role: string;
  accountType: string;
  location:{
    type: string;
    coordinates: [number, number];
  };
  personal: {
    desiredRelationship: string[];
  };
  myIdealPartner: {
    ethnicity: string[];
    maritalStatus: string[];
    desiredRelationship: string[];
    willingToRelocate: string[];
  };
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type SignUpResponseType = {
  status: string;
  message: string;
  state: string;
  token: string;
  user: SinupUserInfo;
};

