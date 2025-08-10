import { Box } from '@mantine/core';
import { ReactNode } from 'react';
import styles from './MdxContent.module.css';

interface MdxContentProps {
  children: ReactNode;
}

export const MdxContent = ({ children }: MdxContentProps) => {
  return <Box className={styles['mdx-content']}>{children}</Box>;
};
