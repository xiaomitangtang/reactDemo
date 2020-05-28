import React, { useMemo, useState, Profiler } from 'react';
import { Checkbox, Col, Row, message, Input, Button } from 'antd';
import { useSize } from '@umijs/hooks';

export const SizeDemo = () => {
  const [state, ref] = useSize();
  return <div ref={ref}>
    try to resize the preview window <br />
  dimensions -- width: {state.width} px, height: {state.height} px
</div>
}

