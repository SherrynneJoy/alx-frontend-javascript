interface Teacher {
  readonly fisrtName: string;
  readonly lastName: string;
  readonly fullTimeEmployee: boolean;
  readonly yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  readonly numberOfReports: number;
}
