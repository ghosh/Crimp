import React from 'react';
import styled, { keyframes } from 'styled-components';

const List = styled.ul`
	margin: 0;
	padding: 1px 10px;
  height: 100%;
  border-radius: 3px;
  list-style-type: none;
  background-color: #d8ddef;
  color: #4C4D6C;
	height: 275px;
	overflow: scroll;
`;

const ListItem = styled.li`
	display: flex;
	align-items: center;
	padding: 13px 0;
	border-bottom: solid 1px #d0d5e8;
	&:last-child {
		border-bottom: 0;
	}
`;

const ListData = styled.div`
	display: flex;
	flex-direction: column;
`;

const FileName = styled.p`
	margin: 0;
	color: #4C4D6C;
	font-size: 13px;
	margin-bottom: 5px;
	line-height: 1;
`;

const FileSummary = styled.p`
	margin: 0;
	font-size: 10px;
	line-height: 1;
	color: #8182a5;
`;

const FileImage = styled.div`
	width: 35px;
	height: 35px;
	background-size: cover;
	background-position: top center;
	margin-right: 8px;
`;


const ReportList = ({ files }) => (
	<List>

		{Object.keys(files).map((key) => {
			const file = files[key];
			const fileImgStyles = {
				backgroundImage: `url(${file.path})`
			}
			return (
				<ListItem key={key}>
					<FileImage style={fileImgStyles} />
					<ListData>
						<FileName>{file.fileName}</FileName>
						<FileSummary>{file.deltaBytes} saved,   ▼ {file.deltaPerct}%</FileSummary>
					</ListData>
				</ListItem>
			);
		})}

	</List>
)

export default ReportList;