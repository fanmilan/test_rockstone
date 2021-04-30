import './Screen.scss';

export function Screen({id, children}) {
    return <div  className={'screen screen_'+id}>
        {children}
    </div>;
}