declare class _EventTarget {
  getAttribute(attr: string): string;
}
declare class _Event {
  currentTarget: _EventTarget;
  preventDefault(): void;
}
