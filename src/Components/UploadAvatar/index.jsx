import React, { useState } from 'react'
import { Upload, Modal, message } from 'antd';
import { Tooltip } from 'antd';
import { LoadingOutlined, PlusOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { updateAvatarService } from '../../Axios/user';
import { useDispatch } from "react-redux";
import { UPDATE_AVATAR } from '../../constant/actionType';

export default function UploadAvatar({ avatar }) {
    const [editable, seteditable] = useState(false);
    const [loading, setloading] = useState(false);
    const imageUrl = avatar && process.env.REACT_APP_IMAGES_SERVER + avatar
    const dispatch = useDispatch();
    const [previewVisible, setpreviewVisible] = useState(false);

    const uploadImage = (options) => {
        const data = new FormData()
        data.append('avatar', options.file);

        setloading(true);
        updateAvatarService(data)
            .then(res => {
                dispatch({
                    type: UPDATE_AVATAR,
                    payload: res.data.avatar
                })
                seteditable(false);
            })
            .catch(err => {
                message.error(<span className="my-2">Update avatar failed</span>);
                console.log(err);
            })
            .finally(() => {
                setloading(false);
                seteditable(false);
            })
    }

    const beforeUpload = (file) => {
        if (['image/jpeg', 'image/png', 'image/svg'].includes(file.type)) return true;
        message.error('Only jpeg, png, svg file is accepted');
        seteditable(false)
        return false;
    }

    const renderContent = () => {
        if (loading) return <LoadingOutlined />;
        if (editable) return <PlusOutlined />;
        if (imageUrl) return <img src={imageUrl} alt="avatar" />;
        return <img src="/img/background/avatar-placeholder.png" alt="avatar" />
    }

    return (<>
        <div className="avatarWrapper">
            <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                disabled={!editable}
                showUploadList={false}
                beforeUpload={beforeUpload}
                customRequest={uploadImage}
            >
                {renderContent()}
            </Upload>
            <div className={`userProfile_header_editAvartarIcon ${editable ? 'hidden' : ''}`}>
                <Tooltip placement="bottom" title={"Edit Avatar"}>
                    <EditOutlined onClick={() => seteditable(true)} />
                </Tooltip>
                <Tooltip placement="bottom" title={"View"}>
                    <EyeOutlined onClick={() => setpreviewVisible(true)} />
                </Tooltip>
            </div>
        </div>
        <Modal
          visible={previewVisible}
          title={'Your avatar'}
          footer={null}
          onCancel={() => setpreviewVisible(false)}
        >
          <img alt="avatar" style={{ width: '100%' }} src={imageUrl} />
        </Modal>
    </>)
}
