import { Scope } from '../../types';
import { Graph } from '../../graph/Graph';
import providedPropertiesStore from '../../ProvidedPropertiesStore';
import makeSingleton from './PropertyDescriptorToSingleton';

interface ProvidesParams {
  scope?: Scope;
  name: string;
}

export function Provides({ name }: Partial<ProvidesParams> = {}) {
  return function provide(graph: Graph, propertyKey: string, descriptor: PropertyDescriptor) {
    providedPropertiesStore.set(graph, propertyKey, name!);
    return makeSingleton(descriptor);
  };
}
