export interface IState {
	callsList: Array<ICall>;
  callDetail: ICall;
  token: string;
  hasNextPage: boolean;
}
export interface ICall {
	id: string;
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

export interface INote {
	id: string;
  content: string;
}