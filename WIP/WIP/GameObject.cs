using System.Collections.Generic;
using System.Drawing;
using System.Net.Mime;
using System.Windows.Forms;

namespace WIP
{
    public class GameObject
    {
        public PictureBox imageBox = new PictureBox();
        public int worldx = 0;
        public int worldy = 0;
        public int velocityx;
        public int velocityy;
        public int maxVelocity = 100;
        public string image = "rock.png";
        public List<Force> Forces = new List<Force>();
        
        public void addForces()
        {
            for (int i = 0; i < Forces.Count; i++)
            {
                velocityx += Forces[i].getXComponent();
                velocityy += Forces[i].getYComponent();
                if (velocityx >= maxVelocity)
                {
                    velocityx = maxVelocity;
                }
                if (velocityx <= -maxVelocity)
                {
                    velocityx = -maxVelocity;
                }
                if (velocityy >= maxVelocity)
                {
                    velocityy = maxVelocity;
                }
                if (velocityy <= -maxVelocity)
                {
                    velocityy = -maxVelocity;
                }
                Forces[i].setXComponent(Forces[i].getXComponent() - Forces[i].deccleration);
                Forces[i].setYComponent(Forces[i].getYComponent() - Forces[i].deccleration);
            }

            worldx += velocityx;
            worldy += velocityy;
        }

        public void instance(Form1 form1,int x, int y)
        {
            imageBox.SizeMode = PictureBoxSizeMode.StretchImage;
            imageBox.Image = new Bitmap(image);
            imageBox.ClientSize = new Size(50, 50);
            imageBox.Location = new Point(x, y);
            form1.Controls.Add(imageBox);
        }

        public void changePosition(int x, int y)
        {
            imageBox.Location = new Point(x, y);
        }
    }
}