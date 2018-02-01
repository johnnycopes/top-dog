export class Employee {
  constructor(
    public name: string,
    public location: string,
    public jobTitle: string,
    public techSkills: string[],
    public otherSkills: string[],
    public conferences: object[],
    public achievements: object[],
    public mbti: {
      coreType: string,
      coreTypeName: string
    }
  ) { }
}
