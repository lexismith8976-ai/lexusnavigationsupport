export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

export interface SpecItem {
  label: string;
  value: string;
  unit?: string;
}