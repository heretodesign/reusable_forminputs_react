import StringField from './StringField'
import EntityData from './EntityData'

class ProfileForm extends React.PureComponent {
    
    render() {
        const { user, onChange } = this.props;
        
        return (
            <div className="profile-form">
                <EntityData source={ user } onChange={ onChange }>
                <StringField label="Name" path="name" />
                <StringField label="E-mail" path="email" />
                <StringField label="Phone" path="phone" />
                </EntityData>
            </div>
        );
    }    
}