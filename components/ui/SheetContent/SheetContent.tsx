import { forwardRef } from 'react';
import { DialogContent } from '@radix-ui/react-dialog';

type Props = {
    children: React.ReactNode;
    className?: string;
    side: string
}

const SheetContent = forwardRef(({ children, className, ...props }: Props) => {
    return (
        <DialogContent className={`fixed inset-0 overflow-y-auto bg-white p-6 shadow-lg ${className}`} {...props}>
            {children}
        </DialogContent>
    );
});

SheetContent.displayName = 'SheetContent';

export default SheetContent;
