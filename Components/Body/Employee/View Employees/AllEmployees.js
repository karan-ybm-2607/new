import * as React from 'react';
import { DataGrid, useGridSlotComponentProps, GridToolbar } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';
import { createTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { Pagination } from '@material-ui/lab';
import PaginationItem from '@material-ui/lab/PaginationItem';
import { Typography } from '@material-ui/core';
import { Styles, THEME_COLOR } from '../../../../lib/config';
function customCheckbox(theme) {
    return {
        '& .MuiCheckbox-root svg': {
            width: 16,
            height: 16,
            backgroundColor: 'transparent',
            border: `1px solid ${theme.palette.type === 'light' ? '#d9d9d9' : 'rgb(67, 67, 67)'
                }`,
            borderRadius: 2,
        },
        '& .MuiCheckbox-root svg path': {
            display: 'none',
        },
        '& .MuiCheckbox-root.Mui-checked:not(.MuiCheckbox-indeterminate) svg': {
            backgroundColor: '#1890ff',
            borderColor: '#1890ff',
        },
        '& .MuiCheckbox-root.Mui-checked .MuiIconButton-label:after': {
            position: 'absolute',
            display: 'table',
            border: '2px solid #fff',
            borderTop: 0,
            borderLeft: 0,
            transform: 'rotate(45deg) translate(-50%,-50%)',
            opacity: 1,
            transition: 'all .2s cubic-bezier(.12,.4,.29,1.46) .1s',
            content: '""',
            top: '50%',
            left: '39%',
            width: 5.71428571,
            height: 9.14285714,
        },
        '& .MuiCheckbox-root.MuiCheckbox-indeterminate .MuiIconButton-label:after': {
            width: 8,
            height: 8,
            backgroundColor: '#1890ff',
            transform: 'none',
            top: '39%',
            border: 0,
        },
    };
}

const defaultTheme = createTheme();
const useStyles = makeStyles(
    (theme) => ({
        root: {
            border: 0,
            color:
                theme.palette.type === 'light'
                    ? 'rgba(0,0,0,.85)'
                    : 'rgba(255,255,255,0.85)',
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            WebkitFontSmoothing: 'auto',
            letterSpacing: 'normal',
            '& .MuiDataGrid-toolbarContainer': {
                // justifyContent: 'flex-end',
                '& button': {
                    color: THEME_COLOR.Theme_Primary,
                    '& .MuiBadge-badge': {
                        backgroundColor: THEME_COLOR.Theme_Primary
                    }
                }
            },
            '& .MuiDataGrid-columnsContainer': {
                backgroundColor: theme.palette.type === 'light' ? '#fafafa' : '#1d1d1d',
            },
            '& .MuiDataGrid-iconSeparator': {
                display: 'none',
            },
            '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
                borderRight: `1px solid ${theme.palette.type === 'light' ? '#f0f0f0' : '#303030'
                    }`,
            },
            '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
                borderBottom: `1px solid ${theme.palette.type === 'light' ? '#f0f0f0' : '#303030'
                    }`,
            },
            '& .MuiDataGrid-cell': {
                color:
                    theme.palette.type === 'light'
                        ? 'rgba(0,0,0,.85)'
                        : 'rgba(255,255,255,0.65)',
            },
            '& .MuiPaginationItem-root': {
                borderRadius: 0,
            },
            '& .MuiDataGrid-window': {
                overflow: 'hidden'
            },
            '& .MuiDataGrid-window:hover': {
                overflowX: 'auto',
                overflowY: 'auto'
            },
            ...customCheckbox(theme),
        },
        moduleTitle: {
            fontStyle: 'normal',
            fontSize: 24,
            fontWeight: 600,
            lineHeight: '30px',
            letterSpacing: 0.3,
            color: '#000',
            textTransform: 'capitalize'
        },
    }),
    { defaultTheme },
);

function CustomPagination() {
    const { state, apiRef } = useGridSlotComponentProps();

    return (
        <Pagination
            color="primary"
            variant="outlined"
            shape="rounded"
            page={state.pagination.page}
            count={state.pagination.pageCount}
            // @ts-expect-error
            renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
            onChange={(event, value) => apiRef.current.setPage(value)}
        />
    );
}

const Allemployees = () => {
    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 10,
        maxColumns: 10,
    });

    const classes = useStyles();

    return (
        <div> <Typography className={classes.moduleTitle} variant="h3" gutterBottom>
            Add Employee
        </Typography>
            <div style={{ height: '100vh', width: '100%', marginTop: 45 }}>
                <DataGrid
                    className={classes.root}
                    checkboxSelection
                    pageSize={25}
                    components={{
                        Pagination: CustomPagination,
                        Toolbar: GridToolbar,
                    }}
                    filterModel={{
                        items: [
                            { columnField: 'commodity', operatorValue: 'contains', value: 'rice' },
                        ],
                    }}
                    {...data}
                />
            </div>
        </div>
    );
}
export default Allemployees;