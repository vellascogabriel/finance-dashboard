import { Dialog } from '@radix-ui/react-dialog';

type Props = {
    isOpen: boolean,
    onOpenChange: (open: boolean) => void,
    children: React.ReactNode,
}

const Sheet = ({ isOpen, onOpenChange, children }: Props) => {
    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            {children}
        </Dialog>
    );
};

export default Sheet;
