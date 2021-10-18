import styled from 'styled-components';
import { styledTxt } from '../../sass/utilities';

export const CourseItemStyle = styled.div`
    .ratingCore{
        ${styledTxt('#3c3b37', '16px', '300')}
    }

    .title {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;  
        overflow: hidden;
        height: 50px;

        @include Text($txtBlackPrimary, $h6, $fwBold);
        line-height: 25px;
    }

    .author {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        @include Text($txtBrownLight, $body2, $fwLight);
        line-height: 25px;
        height: 25px;
        color: #80808094;
    }

    .price {
        @include Text($txtBlackPrimary, $h6, $fwBold);
        line-height: 25px;
        margin-bottom: 5px;

        span {
            padding-left: 10px;
            text-decoration-line: line-through;
            @include Text($txtBrownLight, $body2, $fwLight);
        }
    }

    .bestseller {
        background-color: $orangeLight;
        @include Text($txtBlackPrimary, $body2, $fwBold);
        padding: 3px 5px;
        border-radius: 2px;
    }
`