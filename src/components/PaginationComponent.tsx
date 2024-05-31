import {FC} from 'react';
import {IPaginatedPageModel} from "../models/IPaginatedPageModel";
import {useSearchParams} from "react-router-dom";

interface IProps {
    // changePage: (action: string) => void;
    next: IPaginatedPageModel | null;
    prev: IPaginatedPageModel | null;
}

const PaginationComponent: FC<IProps> = ({ prev, next }) => {
    const [, setQuery] = useSearchParams({page: '1'});
    console.log('prev:', {...prev}, 'next:', {...next});
    const changePage = (action: string) => {
            switch (action) {
                case 'prev':
                    setQuery({...prev});
                    break;
                case 'next':
                    setQuery({...next});
                    break;
            }
        }

    return (
        <div>
            <button onClick={() => {
                changePage('prev');
            }}
                    disabled={!prev}
            >prev
            </button>

            <button onClick={() => {
                changePage('next');
            }}
                    disabled={!next}
            >next
            </button>
        </div>
    );
};

export {PaginationComponent};
