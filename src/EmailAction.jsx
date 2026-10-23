/**
 * EmailAction.jsx
 * A segmented email action with clipboard feedback.
 * @version 2026.10.21
 */
import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Check from '@mui/icons-material/Check';
import ContentCopy from '@mui/icons-material/ContentCopy';

const EMAIL_ADDRESS = 'jrud25@outlook.com';

const EmailAction = () => {
    const [status, setStatus] = useState('idle');
    const [hoverOpen, setHoverOpen] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => () => {
        clearTimeout(timeoutRef.current);
    }, []);

    const resetStatus = () => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setStatus('idle'), 2000);
    };

    const handleCopy = async () => {
        if (!navigator.clipboard?.writeText) {
            setStatus('failed');
            resetStatus();
            return;
        }

        try {
            await navigator.clipboard.writeText(EMAIL_ADDRESS);
            setStatus('copied');
        } catch {
            setStatus('failed');
        }
        resetStatus();
    };

    const tooltipTitle = status === 'copied'
        ? 'Copied'
        : status === 'failed'
            ? "Couldn't copy, use Email Jordan"
            : 'Copy email address';

    return (
        <Box
            sx={{
                display: 'inline-flex',
                alignItems: 'stretch',
                border: '1px solid rgba(255,255,255,0.28)',
                borderRadius: '999px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                '&:hover': {
                    borderColor: 'rgba(255,255,255,0.62)',
                    transform: 'translateY(-2px)',
                },
                '@media (prefers-reduced-motion: reduce)': {
                    transition: 'none',
                    '&:hover': { transform: 'none' },
                },
            }}
        >
            <Button
                href={`mailto:${EMAIL_ADDRESS}`}
                sx={{
                    padding: '10px 14px 10px 22px',
                    fontSize: '1rem',
                    fontWeight: 700,
                    textTransform: 'none',
                    color: 'white',
                    border: 0,
                    borderRadius: 0,
                    '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.12)',
                    },
                }}
            >
                Email Jordan
            </Button>
            <Box aria-hidden sx={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.28)' }} />
            <Tooltip
                arrow
                placement="top"
                open={hoverOpen || status !== 'idle'}
                onOpen={() => setHoverOpen(true)}
                onClose={() => setHoverOpen(false)}
                title={tooltipTitle}
            >
                <IconButton
                    aria-label="Copy email address"
                    onClick={handleCopy}
                    sx={{
                        width: 36,
                        borderRadius: 0,
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'rgba(255,255,255,0.12)',
                        },
                        '&:focus-visible': {
                            outline: '2px solid #FFB84D',
                            outlineOffset: '-2px',
                        },
                    }}
                >
                    {status === 'copied'
                        ? <Check sx={{ fontSize: 18 }} />
                        : <ContentCopy sx={{ fontSize: 18 }} />}
                </IconButton>
            </Tooltip>
            {/* eslint-disable-next-line jsx-a11y/prefer-tag-over-role */}
            <Box component="span" role="status"
                sx={{
                    position: 'absolute',
                    width: 1,
                    height: 1,
                    overflow: 'hidden',
                    clip: 'rect(0 0 0 0)',
                    whiteSpace: 'nowrap',
                    margin: -1,
                    padding: 0,
                    border: 0,
                }}
            >
                {status === 'copied' ? 'Email address copied' : status === 'failed' ? "Couldn't copy the email address" : ''}
            </Box>
        </Box>
    );
};

export default EmailAction;
