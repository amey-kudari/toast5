import type { Meta, StoryObj } from '@storybook/react';
import { ToastPlayground } from './ToastPlayground';

const meta = {
  title: 'Example/ToastPlayground',
  component: ToastPlayground,
  tags: ['autodocs'],
} as Meta<typeof ToastPlayground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};