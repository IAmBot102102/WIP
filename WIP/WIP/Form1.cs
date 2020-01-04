using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WIP
{
    public partial class Form1 : Form
    {
        public Player player;
        
        public Form1()
        {
            InitializeComponent();
        }

        private void MainLoopTimer_Tick(object sender, EventArgs e)
        {
            player.changePosition(player.screenx, player.screeny);
        }

        private void Form1_KeyDown(object sender, KeyEventArgs e)
        {
            switch (e.KeyCode)
            {
                case Keys.W:
                    player.screeny += 30;
                    break;
                case Keys.A:
                    player.screenx -= 30;
                    break;
                case Keys.D:
                    player.screenx -= 30;
                    break;
                case Keys.S:
                    player.screeny -= 30;
                    break;
            }
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            player = new Player();
            
            player.instance(this, player.screenx, player.screeny);
        }
    }
}