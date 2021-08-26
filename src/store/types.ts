export interface ICall {
	id: number;
  direction: string;
  from: string;
  to: string;
  duration: number;
  isArchived: boolean;
  callType: string;
  via: string;
  createdAt: string;
  notes: Array<INote>;
}

interface INote {
	id: number;
  content: string;
}