import { useLayoutEffect, useEffect } from 'react';

export const useIsoEffect = typeof window !== 'undefined' && window.document ? useLayoutEffect : useEffect;
