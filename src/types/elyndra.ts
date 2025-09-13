export interface ElyndraLore {
  name: string;
  title: string;
  realm: string;
  origin: string;
  powers: string[];
  artifacts: Artifact[];
  story: {
    genesis: string;
    role: string;
    trials: string[];
    philosophy: string;
  };
}

export interface Artifact {
  name: string;
  description: string;
  power: string;
  appearance: string;
}

export interface CosmicRealm {
  name: string;
  description: string;
  significance: string;
  visualization: string;
}

export interface EchoAbility {
  name: string;
  description: string;
  cost: string;
  effect: string;
}

export interface CoinIntegration {
  symbol?: string;
  name?: string;
  connection: string;
  narrativeRole: string;
  futureFeatures: string[];
}

export interface AnimationConfig {
  duration: number;
  delay?: number;
  ease?: string;
  repeat?: boolean;
}

export interface CosmicEffect {
  type: 'ripple' | 'shimmer' | 'glow' | 'float';
  intensity: number;
  color?: string;
  duration?: number;
}