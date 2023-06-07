import { useSetRecoilState } from 'recoil';
import { nodesSelector } from '../state/graph';
import { useCallback } from 'react';
import { ChartNode } from '@ironclad/rivet-core';

export function useUpdateNode() {
  const setNodes = useSetRecoilState(nodesSelector);

  return useCallback(
    (node: ChartNode) => {
      setNodes((nodes) => {
        const nodeIndex = nodes.findIndex((n) => n.id === node.id);
        if (nodeIndex === -1) {
          return nodes;
        }
        return [...nodes.slice(0, nodeIndex), node, ...nodes.slice(nodeIndex + 1)];
      });
    },
    [setNodes],
  );
}
