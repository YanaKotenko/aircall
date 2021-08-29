export interface IState {
	callsList: Array<ICall>;
	filteredCalls: Array<ICall>;
	filterProps: Array<IFilterProp>;
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
  isMissed: boolean;
  isOutbound: boolean;
  callType: string;
  via: string;
  createdAt: string;
  notes: Array<INote>;
}

export interface INote {
	id: string;
  content: string;
}

export interface IFilterProp {
	id: number;
  title: string;
  value: string;
  isChecked: boolean;
}