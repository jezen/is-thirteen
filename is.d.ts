interface ThirteenMatcher {
  thirteen(): boolean;
  roughly: RoughlyThirteenMatcher;
  returning: ReturningThirteenMatcher;
  not: InvertedThirteenMatcher;
  divisible: DivisibilityThirteenMatcher;
  square: SquareThirteenMatcher;
  greater: GreaterThirteenMatcher;
  less: LessThirteenMatcher;
  within(range: number): WithinThirteenMatcher;
  yearOfBirth: YearOfBirthThirteenMatcher;
  plus(amount: number): ThirteenMatcher;
  minus(amount: number): ThirteenMatcher;
  times(amount: number): ThirteenMatcher;
  dividedBy(amount: number): ThirteenMatcher;
  canSpell: CanSpellThirteenMatcher;
  anagramOf: AnagramOfThirteenMatcher;
  backwards: BackwardsThirteenMatcher;
  atomicNumber: AtomicNumberThirteenMatcher;
  base(x: number): BaseThirteenMatcher;
}

interface RoughlyThirteenMatcher {
  thirteen(): boolean;
}

interface ReturningThirteenMatcher {
  thirteen(): boolean;
}

interface InvertedThirteenMatcher {
  thirteen(): boolean;
}

interface DivisibilityThirteenMatcher {
  thirteen(): boolean;
}

interface SquareThirteenMatcher {
  of: SquareOfThirteenMatcher;
}

interface SquareOfThirteenMatcher {
  thirteen(): boolean;
}

interface GreaterThirteenMatcher {
  than: GreaterThanThirteenMatcher;
}

interface GreaterThanThirteenMatcher {
  thirteen(): boolean;
}

interface LessThirteenMatcher {
  than: LessThanThirteenMatcher;
}

interface LessThanThirteenMatcher {
  thirteen(): boolean;
}

interface WithinThirteenMatcher {
  of: WithinOfThirteenMatcher;
}

interface WithinOfThirteenMatcher {
  thirteen(): boolean;
}

interface YearOfBirthThirteenMatcher {
  thirteen(): boolean;
}

interface CanSpellThirteenMatcher {
  thirteen(): boolean;
}

interface AnagramOfThirteenMatcher {
  thirteen(): boolean;
}

interface BackwardsThirteenMatcher {
  thirteen(): boolean;
}

interface AtomicNumberThirteenMatcher {
  thirteen(): boolean;
}

interface BaseThirteenMatcher {
  thirteen(): boolean;
}

export default function is(n: any): ThirteenMatcher;
