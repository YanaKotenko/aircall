export interface ICall {
	id: number;
  direction: 'inbound' | 'outbound';
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