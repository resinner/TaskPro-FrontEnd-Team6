import {IconMove,
    PopupWrapper,
    PopupOpenBlock,
    PopupOpenBlockItem,
    OptionPopup,
  } from './Card.styled';
  import sprite from '../../images/sprite.svg';
  import React, { useState, useEffect, useRef} from 'react';
  
  
  const CardmovePopup =()=> {
      
            const [isShownPop, setIsShownPop] = useState(false);
            const themeRef = useRef();
  
            const handleOutsideClick=event=> {
              const path = event.composedPath();
          
              if (!path.includes(themeRef.current)) {
                setIsShownPop(false);
              }
            };
          
            const openPopup=()=> {
              setIsShownPop(!isShownPop);
            };
          
            useEffect(() => {
              document.body.addEventListener('click', handleOutsideClick);
          
              return () => {
                document.body.removeEventListener('click', handleOutsideClick);
              };
            }, []);
  
  
      return(
          <PopupWrapper ref={themeRef} onClick={openPopup}>
              {/* <IconMove isOpen={isShownPop}>
          <use href={sprite + '#icon-arrow-circle-broken-right'} />
        </IconMove > */}
        {isShownPop&&(
          <PopupOpenBlock>
          <PopupOpenBlockItem>
              <OptionPopup>In progress</OptionPopup>
          <IconMove isOpen={isShownPop}>
          <use href={sprite + '#icon-arrow-circle-broken-right'} />
        </IconMove>
          </PopupOpenBlockItem>
          
      <PopupOpenBlockItem>
           <OptionPopup>Done</OptionPopup>
          <IconMove isOpen={isShownPop}>
          <use href={sprite + '#icon-arrow-circle-broken-right'} />
        </IconMove>
      </PopupOpenBlockItem>
      </PopupOpenBlock>
        )}
  
          </PopupWrapper>
  
      )
  }
  
  export default CardmovePopup;